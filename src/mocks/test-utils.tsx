import { MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, RenderOptions } from '@testing-library/react'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retryDelay: 1,
            retry: 0,
        },
    },
})

// Disabling eslint rule here as this is just for the unit tests shouldn't impact refresh
// eslint-disable-next-line react-refresh/only-export-components
const AllProviders = ({ children }: { children?: React.ReactNode }) => (
    <MantineProvider>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </MantineProvider>
)

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
    render(ui, { wrapper: AllProviders, ...options })

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react'
export { customRender as render }
