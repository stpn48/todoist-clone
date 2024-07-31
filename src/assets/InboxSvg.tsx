import { useAppColors } from "@/state/appColorsStore";

type Props = {
  activeChoice: string;
};

export function InboxSvg({ activeChoice }: Props) {
  const { appColors } = useAppColors();

  return activeChoice !== "inbox" ? (
    <svg
      style={{ color: appColors.secondaryTextColor }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.062 4h7.876a2 2 0 0 1 1.94 1.515l2.062 8.246c.04.159.06.322.06.486V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3.754a2 2 0 0 1 .06-.485L6.12 5.515A2 2 0 0 1 8.061 4Zm0 1a1 1 0 0 0-.97.758L5.03 14.004a1 1 0 0 0-.03.242V18a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.754a.997.997 0 0 0-.03-.242L16.91 5.758a1 1 0 0 0-.97-.758H8.061Zm6.643 10a2.75 2.75 0 0 1-5.41 0H7a.5.5 0 1 1 0-1h2.75a.5.5 0 0 1 .5.5 1.75 1.75 0 1 0 3.5 0 .5.5 0 0 1 .5-.5H17a.5.5 0 0 1 0 1h-2.295Z"
        clipRule="evenodd"
      ></path>
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill={appColors.iconicColor}
      viewBox="0 0 24 24"
    >
      <path
        fill={appColors.iconicColor}
        fillRule="evenodd"
        d="M8.062 4h7.876a2 2 0 0 1 1.94 1.515l2.062 8.246c.04.159.06.322.06.486V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3.754a2 2 0 0 1 .06-.485L6.12 5.515A2 2 0 0 1 8.061 4Zm0 1a1 1 0 0 0-.97.758L5.03 14.004h4.78a.5.5 0 0 1 .44.496 1.75 1.75 0 1 0 3.5 0 .5.5 0 0 1 .44-.496h4.78L16.91 5.758a1 1 0 0 0-.97-.758H8.061Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
