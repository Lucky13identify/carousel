// translater.js
export function getProjectName(project, i18n) {
  const currentLocale = i18n.locale;

  // Получите название проекта для текущей локали
  return project.name[currentLocale];
}
