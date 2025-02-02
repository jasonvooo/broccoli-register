import { render, screen } from '@/mocks/test-utils'

import { Landing } from './landing'

describe('Landing', () => {
    it('Should render the landing page', async () => {
        render(<Landing />)
        expect(await screen.findByText('A better way to enjoy every day.')).toBeInTheDocument()
        expect(screen.getByText('Be the first to know when we launch.')).toBeInTheDocument()
        expect(screen.getByRole('button', { name: 'Request an invite' })).toBeInTheDocument()
    })
})
