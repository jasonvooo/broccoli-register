import { render, screen } from '@/mocks/test-utils'

import { Footer } from './footer'

describe('Footer', () => {
    it('Should render the footer', () => {
        render(<Footer />)
        expect(screen.getByText('Made with 🥦 and care.')).toBeVisible()
        expect(screen.getByText('© 2024 Broccoli & Co. All rights reserved.')).toBeVisible()
    })
})
