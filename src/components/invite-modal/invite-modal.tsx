import { Button, Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconMail } from '@tabler/icons-react'

import { InviteForm } from '@/components/invite-form/invite-form'

export const InviteModal = () => {
    const [opened, { open, close }] = useDisclosure(false)

    return (
        <>
            <Button leftSection={<IconMail />} onClick={open} variant="outline">
                Request an invite
            </Button>
            <Modal centered onClose={close} opened={opened} withCloseButton={false}>
                {opened && <InviteForm onSuccess={close} />}
            </Modal>
        </>
    )
}
