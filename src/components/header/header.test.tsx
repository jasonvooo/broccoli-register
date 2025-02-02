import { render, screen } from '@/mocks/test-utils'

import { Header } from './header'

describe('Header', () => {
    it('Should render the header', () => {
        render(<Header />)
        expect(screen.getByText('🥦 BROCCOLI & CO.')).toBeVisible()
    })
})
