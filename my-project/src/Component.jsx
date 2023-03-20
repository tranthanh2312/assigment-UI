import { useState } from 'react';
import { IconGauge, IconFingerprint, IconActivity, IconChevronRight } from '@tabler/icons-react';
import { Box, NavLink } from '@mantine/core';

const data = [
  { icon: IconGauge, label: 'Dashboard', description: 'Item with description' },
  {
    icon: IconFingerprint,
    label: 'Security',
    rightSection: <IconChevronRight size="1rem" stroke={1.5} />,
  },
  { icon: IconActivity, label: 'Activity' },
];

export default function Demo() {
  const [active, setActive] = useState(0);

  const items = data.map((item, index) => (
    <div className=''>
<NavLink
      key={item.label}
      active={index === active}
      label={item.label}
      description={item.description}
      rightSection={item.rightSection}
      icon={<item.icon size="1rem" stroke={1.5} />}
      onClick={() => setActive(index)}
      styles={{"margin-right": "80px"}}
    />
    </div>
    
  ));

  return <div className='bg-slate-200 rounded-lg'>
<Box w={220}>{items}</Box>
  </div> 
}