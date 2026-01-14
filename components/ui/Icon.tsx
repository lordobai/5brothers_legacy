import { 
  Target, 
  Sparkles, 
  TrendingUp, 
  ArrowRight,
  Heart,
  Users,
  GraduationCap,
  Stethoscope,
  Droplet,
  Shield,
  Lightbulb,
  HandHeart,
  Building2,
  UserCheck,
  Handshake,
  Network,
  Gift,
  UserPlus,
  type LucideIcon,
} from 'lucide-react'

interface IconProps {
  name: string
  size?: number
  className?: string
  strokeWidth?: number
}

const iconMap: Record<string, LucideIcon> = {
  target: Target,
  sparkles: Sparkles,
  trendingUp: TrendingUp,
  arrowRight: ArrowRight,
  heart: Heart,
  users: Users,
  graduation: GraduationCap,
  health: Stethoscope,
  water: Droplet,
  shield: Shield,
  lightbulb: Lightbulb,
  handHeart: HandHeart,
  building: Building2,
  userCheck: UserCheck,
  handshake: Handshake,
  network: Network,
  gift: Gift,
  userPlus: UserPlus,
}

export const Icon = ({ name, size = 24, className = '', strokeWidth = 2 }: IconProps) => {
  const IconComponent = iconMap[name.toLowerCase()] || Target

  return (
    <IconComponent 
      size={size} 
      className={className}
      strokeWidth={strokeWidth}
    />
  )
}
