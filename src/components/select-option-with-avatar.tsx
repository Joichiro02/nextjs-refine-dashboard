import CustomerAvatar from './custom-avatar';
import { Text } from './text';

type Props = {
  name: string;
  avatarUrl?: string;
  shape?: 'circle' | 'square'
}

export default function SelectOptionWithAvatar({ avatarUrl, name, shape }: Props) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}
    >
      <CustomerAvatar shape={shape} name={name} src={avatarUrl}/>
      <Text>{name}</Text>
    </div>
  )
}
