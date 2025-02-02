import { Button, Divider, Stack, Text } from '@mantine/core'

interface InviteFormSuccessProps {
    onClose: () => void
}

export const InviteFormSuccess = ({ onClose }: InviteFormSuccessProps) => {
    return (
        <Stack justify="space-between" m="md">
            <Text fw={700} size="lg" ta="center">
                &#129382; All done!
            </Text>
            <Divider />
            <Text ta="center">
                You will be one of the first to experience Broccoli & Co. when we launch.
            </Text>
            <Button fullWidth onClick={onClose}>
                Ok
            </Button>
        </Stack>
    )
}
