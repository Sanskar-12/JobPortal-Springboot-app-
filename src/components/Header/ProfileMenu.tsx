import { Menu, Avatar, Switch } from "@mantine/core";
import {
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
  IconUserCircle,
  IconFileText,
  IconMoon,
  IconSun,
  IconMoonStars,
} from "@tabler/icons-react";
import { useState } from "react";

const ProfileMenu = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <div className="flex items-center gap-3 cursor-pointer">
          <div>Sanskar</div>
          <Avatar src="/avatar.png" alt="it's me" />
        </div>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item leftSection={<IconUserCircle size={14} />}>
          Profile
        </Menu.Item>
        <Menu.Item leftSection={<IconMessageCircle size={14} />}>
          Messages
        </Menu.Item>
        <Menu.Item leftSection={<IconFileText size={14} />}>Resume</Menu.Item>
        <Menu.Item
          leftSection={<IconMoon size={14} />}
          rightSection={
            <Switch
              size="md"
              color="dark.4"
              onLabel={<IconSun size={16} stroke={2.5} color="yellow" />}
              offLabel={<IconMoonStars size={16} stroke={2.5} color="cyan" />}
              checked={checked}
              onChange={(event) => setChecked(event.currentTarget.checked)}
            />
          }
        >
          Dark Mode
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item leftSection={<IconArrowsLeftRight size={14} />}>
          Transfer my data
        </Menu.Item>
        <Menu.Item color="red" leftSection={<IconTrash size={14} />}>
          Delete my account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ProfileMenu;
