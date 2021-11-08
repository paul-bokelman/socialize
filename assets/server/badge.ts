export const badge = ({
  icon,
  color,
}: {
  icon: string;
  color: string;
}): string => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
    <rect id="Rectangle_1442" data-name="Rectangle 1442" width="20" height="20" rx="4" fill="${color}"/>
    ${icon}
  </svg>
  `;
};
