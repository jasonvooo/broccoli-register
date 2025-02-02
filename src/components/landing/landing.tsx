import { Flex, Title } from '@mantine/core'
import { motion } from 'motion/react'

import { InviteModal } from '@/components/invite-modal/invite-modal'

export const Landing = () => {
    return (
        <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
        >
            <Flex
                align="center"
                direction="column"
                gap="md"
                h="100vh"
                justify="center"
                mx="sm"
                ta="center"
            >
                <Title order={1}>A better way to enjoy every day.</Title>
                <Title order={2}>Be the first to know when we launch.</Title>
                <InviteModal />
            </Flex>
        </motion.div>
    )
}
