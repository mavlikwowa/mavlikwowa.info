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
