import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'

import { API_URL } from '@/api'
import { server } from '@/mocks/server'
import { render, screen } from '@/mocks/test-utils'

import { InviteForm } from './invite-form'

describe('InviteForm', () => {
    it('Should render the invite form', () => {
        render(<InviteForm onSuccess={vi.fn()} />)

        expect(screen.getByLabelText('Name')).toBeVisible()
        expect(screen.getByLabelText('Email')).toBeVisible()
        expect(screen.getByLabelText('Confirm Email')).toBeVisible()
        expect(screen.getByRole('button', { name: 'Submit' })).toBeVisible()
    })

    it('Should display error if name is less than 3 characters', async () => {
        render(<InviteForm onSuccess={vi.fn()} />)

        await userEvent.type(screen.getByLabelText('Name'), 'ab')
        await userEvent.tab()
        expect(screen.getByText('Name must have at least 3 characters')).toBeVisible()
    })
    it('Should display error if email is invalid', async () => {
        render(<InviteForm onSuccess={vi.fn()} />)

        await userEvent.type(screen.getByLabelText('Email'), 'ab')
        await userEvent.tab()
        expect(screen.getByText('Invalid email')).toBeVisible()
    })

    it('Should display error if email and confirmEmail are invalid', async () => {
        render(<InviteForm onSuccess={vi.fn()} />)

        await userEvent.type(screen.getByLabelText('Email'), 'test@test.com')
        await userEvent.type(screen.getByLabelText('Confirm Email'), 'test1@test.com')
        await userEvent.tab()
        expect(screen.getByText("Emails don't match")).toBeVisible()
    })

    it('Should be able to complete form successfully', async () => {
        const onSuccessMock = vi.fn()
        render(<InviteForm onSuccess={onSuccessMock} />)
        await userEvent.type(screen.getByLabelText('Name'), 'abc')
        await userEvent.type(screen.getByLabelText('Email'), 'test@test.com')
        await userEvent.type(screen.getByLabelText('Confirm Email'), 'test@test.com')

        await userEvent.click(screen.getByRole('button', { name: 'Submit' }))

        expect(await screen.findByText('🥦 All done!')).toBeVisible()
        expect(
            screen.getByText(
                'You will be one of the first to experience Broccoli & Co. when we launch.',
            ),
        ).toBeVisible()

        await userEvent.click(screen.getByRole('button', { name: 'Ok' }))
        expect(onSuccessMock).toHaveBeenCalled()
    })

    it('Should show an error message if the request fails and able to resubmit form', async () => {
        server.use(
            http.post(
                API_URL,
                () => HttpResponse.json({ errorMessage: 'Email already in use' }, { status: 400 }),
                { once: true },
            ),
            http.post(API_URL, () => HttpResponse.json({})),
        )

        render(<InviteForm onSuccess={vi.fn()} />)
        await userEvent.type(screen.getByLabelText('Name'), 'abc')
        await userEvent.type(screen.getByLabelText('Email'), 'test@test.com')
        await userEvent.type(screen.getByLabelText('Confirm Email'), 'test@test.com')

        await userEvent.click(screen.getByRole('button', { name: 'Submit' }))

        expect(await screen.findByText('Email already in use')).toBeVisible()

        await userEvent.clear(screen.getByLabelText('Email'))
        await userEvent.type(screen.getByLabelText('Email'), 'newtest@test.com')
        await userEvent.clear(screen.getByLabelText('Confirm Email'))
        await userEvent.type(screen.getByLabelText('Confirm Email'), 'newtest@test.com')

        await userEvent.click(screen.getByRole('button', { name: 'Submit' }))
        expect(await screen.findByText('🥦 All done!')).toBeVisible()
    })
})
