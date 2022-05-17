import { ChakraBadge } from './components/Badge/badgeJS'
import { ChakraButton } from './components/Button/buttonJS'
import { ChakraCircularProgress } from './components/CircularProgress/circularProgressJS'
import { ChakraIcon } from './components/Icon/iconJS'
import { ChakraProgress } from './components/Progress/progressJS'
import { ChakraSkeleton } from './components/Skeleton/skeletonJS'

export const chakraPSTheme = {
  components: {
    Badge: ChakraBadge,
    Button: ChakraButton,
    CircularProgress: ChakraCircularProgress,
    Icon: ChakraIcon,
    Progress: ChakraProgress,
    Skeleton: ChakraSkeleton,
  },
}
