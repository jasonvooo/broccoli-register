import { Alert, Button, Divider, Stack, Text, TextInput } from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import { IconExclamationCircleFilled } from '@tabler/icons-react'
import { z } from 'zod'

import { InviteFormSuccess } from '@/components/invite-form-success/invite-form-success'

import { inviteFormSchema } from './invite-form-schema'
import { useSendInvite } from './use-send-invite'

interface InviteFormProps {
    onSuccess: () => void
}

export const InviteForm = ({ onSuccess }: InviteFormProps) => {
    const form = useForm<z.infer<typeof inviteFormSchema>>({
        initialValues: {
            name: '',
            email: '',
            confirmEmail: '',
        },
        clearInputErrorOnChange: true,
        validateInputOnBlur: true,
        validate: zodResolver(inviteFormSchema),
    })

    const { sendInvite, isPending, error, isSuccess } = useSendInvite()

    if (isSuccess) {
        return <InviteFormSuccess onClose={onSuccess} />
    }

    return (
        <form onSubmit={form.onSubmit((values) => sendInvite(values))}>
            <Stack justify="space-between" m="md">
                <Text fw={700} size="lg" ta="center">
                    &#129382; Request an invite
                </Text>
                <Divider />
                <TextInput
                    /**
                     * Not ideal to set the fixed height here but I was having issues
                     * with the input field jumping as an error was shown
                     */
                    h={65}
                    key={form.key('name')}
                    label="Name"
                    placeholder="Name"
                    {...form.getInputProps('name')}
                />
                <TextInput
                    h={65}
                    key={form.key('email')}
                    label="Email"
                    placeholder="signup@broccoli.com"
                    {...form.getInputProps('email')}
                />
                <TextInput
                    h={65}
                    key={form.key('confirmEmail')}
                    label="Confirm Email"
                    placeholder="signup@broccoli.com"
                    {...form.getInputProps('confirmEmail')}
                />
                <Button fullWidth loading={isPending} mt="md" type="submit">
                    Submit
                </Button>

                {error?.message && (
                    <Alert
                        color="red"
                        icon={<IconExclamationCircleFilled />}
                        mt="md"
                        title={error.message}
                    />
                )}
            </Stack>
        </form>
    )
}
