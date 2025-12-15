import React from 'react';
import {
  Target,
  Sparkles,
  TrendingUp,
  Users,
  Heart,
  Droplets,
  Shield,
  Lightbulb,
  Handshake,
  BarChart3,
  GraduationCap,
  Stethoscope,
  Wrench,
  AlertCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Download,
  CheckCircle2,
  ChevronDown,
  X,
  Menu,
  DollarSign,
  Gift,
  ShoppingBag,
  Megaphone,
  FileText,
  Calendar,
  Search,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const iconMap = {
  target: Target,
  sparkles: Sparkles,
  trendingUp: TrendingUp,
  users: Users,
  heart: Heart,
  droplets: Droplets,
  shield: Shield,
  lightbulb: Lightbulb,
  handshake: Handshake,
  barChart3: BarChart3,
  graduationCap: GraduationCap,
  stethoscope: Stethoscope,
  wrench: Wrench,
  alertCircle: AlertCircle,
  mail: Mail,
  phone: Phone,
  mapPin: MapPin,
  clock: Clock,
  arrowRight: ArrowRight,
  download: Download,
  checkCircle2: CheckCircle2,
  chevronDown: ChevronDown,
  x: X,
  menu: Menu,
  // Social icons - using generic icons as placeholders
  facebook: Users, // Replace with actual Facebook icon if needed
  twitter: Users, // Replace with actual Twitter icon if needed
  instagram: Users, // Replace with actual Instagram icon if needed
  linkedin: Users, // Replace with actual LinkedIn icon if needed
  dollarSign: DollarSign,
  gift: Gift,
  shoppingBag: ShoppingBag,
  megaphone: Megaphone,
  fileText: FileText,
  calendar: Calendar,
  search: Search,
};

export type IconName = keyof typeof iconMap;

interface IconProps {
  name: IconName;
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  className,
  strokeWidth = 2,
}) => {
  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <IconComponent
      size={size}
      className={cn(className)}
      strokeWidth={strokeWidth}
    />
  );
};

