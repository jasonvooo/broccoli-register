import {
    ActionIcon,
    Flex,
    Text,
    useComputedColorScheme,
    useMantineColorScheme,
} from '@mantine/core'
import { IconMoon, IconSun } from '@tabler/icons-react'

import classes from './header.module.css'

export const Header = () => {
    const { setColorScheme } = useMantineColorScheme()
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true })

    return (
        <Flex align="center" justify="space-between" mx="xl" my="md">
            <Text fw={700}>&#129382; BROCCOLI & CO.</Text>

            <ActionIcon
                aria-label="Toggle color scheme"
                onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
                variant="default"
            >
                <IconSun className={classes.light} stroke={1.5} />
                <IconMoon className={classes.dark} stroke={1.5} />
            </ActionIcon>
        </Flex>
    )
}
