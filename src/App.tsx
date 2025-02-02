import { AppShell } from '@mantine/core'

import { Footer } from './components/footer/footer'
import { Header } from './components/header/header'
import { Landing } from './components/landing/landing'

export const App = () => {
    return (
        <AppShell withBorder>
            <AppShell.Header>
                <Header />
            </AppShell.Header>
            <AppShell.Main>
                <Landing />
            </AppShell.Main>
            <AppShell.Footer>
                <Footer />
            </AppShell.Footer>
        </AppShell>
    )
}
