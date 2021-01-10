/* Interfaces */
import { StyledSliderItemProps } from '../components/About/SliderItem/interfaces';

export interface MultiLanguagesInterface {
  ru: string;
  en: string;
}

export interface ExperienceProps {
  header: MultiLanguagesInterface;
  itmh: CompanyProps;
  acs: CompanyProps;
}

export interface CompanyProps extends MultiLanguagesInterface {
  position: EmployeePositionProps[];
}

export interface EmployeePositionProps extends MultiLanguagesInterface {
  dateStart: Date;
  dateEnd?: Date;
}

export interface AboutProps extends MultiLanguagesInterface {
  SliderItem: SliderItemSettings[];
}

export interface SliderItemSettings extends StyledSliderItemProps {
  ruChild: React.ReactNode;
  enChild: React.ReactNode;
}

export type ContactsProps = MultiLanguagesInterface;
