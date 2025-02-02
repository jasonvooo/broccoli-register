import { render, screen } from '@/mocks/test-utils'

import { InviteFormSuccess } from './invite-form-success'

describe('InviteFormSuccess', () => {
    it('Should render the invite form success', () => {
        render(<InviteFormSuccess onClose={vi.fn()} />)
        expect(screen.getByText('🥦 All done!')).toBeVisible()
        expect(
            screen.getByText(
                'You will be one of the first to experience Broccoli & Co. when we launch.',
            ),
        ).toBeVisible()
    })
})
