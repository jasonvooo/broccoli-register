import userEvent from '@testing-library/user-event'

import { render, screen } from '@/mocks/test-utils'

import { InviteModal } from './invite-modal'

describe('InviteModal', () => {
    it('Should render the invite modal', () => {
        render(<InviteModal />)
        expect(screen.getByRole('button', { name: 'Request an invite' })).toBeVisible()
    })

    it('Should automatically dismiss the modal if button presssed', async () => {
        render(<InviteModal />)
        await userEvent.click(screen.getByRole('button', { name: 'Request an invite' }))

        await userEvent.type(await screen.findByLabelText('Name'), 'abc')
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
        expect(screen.queryByText('🥦 All done!')).toBeNull()
    })
})
