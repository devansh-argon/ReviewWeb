import { useHotkeys } from '@mantine/hooks';
import {
    useMantineColorScheme,
    Group,
    ActionIcon,
    useComputedColorScheme,
    Image,
} from '@mantine/core';
import { FiSun } from 'react-icons/fi';
import { PiMoonStars } from 'react-icons/pi';

function AppHeader() {
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('dark');

    const toggleColorScheme = () => {
        setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark');
    };

    useHotkeys([['mod+J', () => toggleColorScheme()]]);

    return (
        <Group justify="space-between" m="20">
            <Image
                src={computedColorScheme === 'dark' ? '/header-dark.svg' : '/header-light.svg'}
                alt="Argon IT Services Logo"
                height={40}
                fit="contain"
            />
            <ActionIcon
                size="lg"
                color="blue"
                variant="gradient"
                onClick={toggleColorScheme}
            >
                {computedColorScheme === 'dark' ? <FiSun /> : <PiMoonStars />}
            </ActionIcon>
        </Group>
    );
}

export default AppHeader;
