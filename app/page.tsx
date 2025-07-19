"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github, Linkedin, Mail, MapPin, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { IconLetterR } from "@tabler/icons-react"
import { FileText } from "lucide-react"

// LeetCode icon component
const LeetCodeIcon = ({ className }: { className?: string }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    role="img"
    viewBox="0 0 24 24"
    className="mr-1 h-4 w-4"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
  </svg>
)

const GoogleCloudIcon = () => (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    xmlSpace="preserve"
  >
    <g transform="translate(0.000000, 1.000000)">
      <g>
        <rect y="0" fill="none" width="24" height="24" />
        <g transform="translate(2.000000, 7.000000)">
          <mask maskUnits="userSpaceOnUse" x="-2" y="-7" width="24" height="24" id="gcp-mask">
            <g>
              <path
                fill="#FFFFFF"
                d="M16.4,3.5c2.3,0.2,4.1,2,4.1,4.3c0,2.4-2,4.3-4.4,4.3H4.8c-2.9,0-5.2-2.3-5.2-5.2c0-2.7,2-4.9,4.7-5.1C5.3-0.3,7.5-1.8,10-1.8
                C13.2-1.8,15.8,0.5,16.4,3.5z M16.1,10.3c1.5,0,2.6-1.2,2.6-2.6s-1.2-2.6-2.6-2.6h-1.3V4.7C14.8,2.1,12.7,0,10,0
                C7.8,0,5.9,1.4,5.4,3.4H4.8C2.8,3.4,1.2,5,1.2,6.9s1.6,3.4,3.5,3.4H16.1z"
              />
            </g>
          </mask>
          <polygon fill="currentColor" mask="url(#gcp-mask)" points="-2,17 22,17 22,-7 -2,-7" />
        </g>
      </g>
    </g>
  </svg>
)

const HTMLIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    height="1em"
    width="1em"
    viewBox="0 0 124 141.532"
    className="text-black dark:text-white"
  >
    <path d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z" opacity="0.1" />
    <path d="M62.468 129.277V12.085l51.064.17-9.106 104.851z" opacity="0.1" />
    <path d="M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z" opacity="0.75" />
  </svg>
);

const CSSIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    height="1em"
    width="1em"
    viewBox="0 0 124 141.53"
    className="text-black dark:text-white"
  >
    <path
      d="M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z"
      opacity="0.1"
    />
    <path
      d="M62.468 129.275V12.085l51.064.17-9.106 104.85z"
      opacity="0.1"
    />
    <path
      d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z"
      opacity="0.75"
    />
  </svg>
);

// Skill icons mapping - using SVG components
const skillIcons = {
  // Programming Languages
  "HTML": <HTMLIcon />,
  "CSS": <CSSIcon />,
  "C++": (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      role="img"
      viewBox="0 0 24 24"
      className="mr-1 h-4 w-4"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" />
    </svg>
  ),
  Python: (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      role="img"
      viewBox="0 0 24 24"
      className="mr-1 h-4 w-4"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
    </svg>
  ),
  JavaScript: (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      role="img"
      viewBox="0 0 24 24"
      className="mr-1 h-4 w-4"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
    </svg>
  ),
  TypeScript: (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      role="img"
      viewBox="0 0 24 24"
      className="mr-1 h-4 w-4"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
    </svg>
  ),
  "Next.js": (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      role="img"
      viewBox="0 0 24 24"
      className="mr-1 h-4 w-4"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z" />
    </svg>
  ),
  "React.js": (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      role="img"
      viewBox="0 0 24 24"
      className="mr-1 h-4 w-4"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
    </svg>
  ),
  "Node.js": (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      role="img"
      viewBox="0 0 24 24"
      className="mr-1 h-4 w-4"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
    </svg>
  ),
  "Express.js": (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      role="img"
      viewBox="0 0 24 24"
      className="mr-1 h-4 w-4"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
    </svg>
  ),
  "Tailwind CSS": (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      role="img"
      viewBox="0 0 24 24"
      className="mr-1 h-4 w-4"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
    </svg>
  ),
  "Google Cloud (GCP)": <GoogleCloudIcon />,
  "MongoDB (NoSQL)": (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      role="img"
      viewBox="0 0 24 24"
      className="mr-1 h-4 w-4"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0011.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
    </svg>
  ),
  Mongoose: (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      role="img"
      viewBox="0 0 24 24"
      className="mr-1 h-4 w-4"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0011.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
    </svg>
  ),
  "MySQL (SQL)": (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      role="img"
      viewBox="0 0 24 24"
      className="mr-1 h-4 w-4"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z" />
    </svg>
  ),
  R: <IconLetterR stroke={1} size={12} />,
  Git: (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      role="img"
      viewBox="0 0 24 24"
      className="mr-1 h-4 w-4"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
    </svg>
  ),
  GitHub: (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      role="img"
      viewBox="0 0 24 24"
      className="mr-1 h-4 w-4"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  ),
  Postman: (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      role="img"
      viewBox="0 0 24 24"
      className="mr-1 h-4 w-4"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zM18.855 6.05a.143.143 0 0 0-.053.157.416.416 0 0 1-.053.45.14.14 0 0 0 .023.197.141.141 0 0 0 .084.03.14.14 0 0 0 .106-.05.691.691 0 0 0 .087-.751.138.138 0 0 0-.194-.033z" />
    </svg>
  ),
  "VS Code": (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      role="img"
      viewBox="0 0 24 24"
      className="mr-1 h-4 w-4"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
    </svg>
  ),
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="w-9 h-9 p-0"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export default function Portfolio() {
  const skills = {
    "Programming Languages": ["C++", "Python"],
    "Frontend": ["JavaScript", "TypeScript", "React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"],
    "Backend": [
      "Node.js",
      "Express.js",
      "Google Cloud (GCP)", "MongoDB (NoSQL)", "Mongoose", "MySQL (SQL)", "R"
    ],
    "Developer Tools": ["Git", "GitHub", "Postman", "VS Code"],
  }

  const projects = [
    {
      title: "CampusCabs",
      year: "2024",
      oneLiner: "Auto Rickshaw Booking & Ride-Sharing Application",
      category: "Full-Stack",
      technologies: ["MERN", "Twilio", "SendGrid", "Framer Motion"],
      details: [
        "Developed a web application for NITJ students, enabling 1000+ users to book rides efficiently and achieving 90% peak-hour ride availability by onboarding 10+ local drivers, reducing commuting costs by 25%.",
        "Enhanced UI/UX and backend performance, boosting user engagement by 20%, using Framer Motion for smooth transitions and Twilio for real-time messaging.",
        "Implemented secure JWT-based authentication and a driver dashboard for managing ride availability."
      ],
      github: "https://github.com/aryann-21/campuscabs",
      preview: "https://deployed-frontend.onrender.com/",
    },
    {
      title: "WoLamhe",
      year: "2025",
      oneLiner: "Personalized Photo Printing Platform",
      category: "Full-Stack",
      technologies: ["MERN", "Cloudinary", "NodeMailer", "MongoDB Atlas"],
      details: [
        "Collaborated with a business to develop a web platform for custom photo prints, targeting 100+ orders monthly and optimizing backend operations to reduce fulfillment time by 20%.",
        "Designed a scalable database to streamline order processing and enable real-time tracking, enhancing overall user experience by 60%.",
        "Integrated Cloudinary for image uploads and implemented automated order notifications via email."
      ],
      github: "https://github.com/aryann-21/wolamhe",
      preview: "https://www.wolamhe.in",
    },
    {
      title: "Emotify",
      year: "2024",
      oneLiner: "Emotion-Based Music Recommendation App",
      category: "Full-Stack",
      technologies: ["face-api.js", "Spotify API", "React.js", "Express.js"],
      details: [
        "Built an AI-driven music recommendation system with 90% classification accuracy, leveraging face-api.js for emotion detection and Spotify API for personalized playlist curation.",
        "Refined recommendation logic, boosting user satisfaction by 15% and improving retention by 10%.",
        "Used React Webcam and face landmarks to dynamically detect and process user emotions in real time."
      ],
      github: "https://github.com/aryann-21/emotify",
      preview: "https://emotify-frontend.onrender.com",
    },
    {
      title: "NoteFlix",
      year: "2023",
      oneLiner: "Netflix-style platform for lecture notes",
      category: "Backend",
      technologies: ["Express.js", "EJS", "Mongoose", "Node.js"],
      details: [
        "Built a responsive and intuitive frontend using React.js and Tailwind CSS for accessing and organizing lecture notes in a Netflix-style UI.",
        "Implemented dynamic routing and modular components to simplify note navigation and improve overall usability.",
        "Connected to MongoDB for storing note metadata and user-uploaded content in a structured format."
      ],
      github: "https://github.com/aryann-21/NoteFlix",
      preview: null,
    },
    {
      title: "WordQuest",
      year: "2023",
      oneLiner: "Word-guessing game inspired by Wordle",
      category: "Frontend",
      technologies: ["HTML", "CSS", "JavaScript"],
      details: [
        "Developed an interactive browser-based word-guessing game using React.js, focusing on clean UI and user feedback integration.",
        "Managed state transitions, error handling, and scoring logic to enhance user engagement.",
        "Styled the interface for clarity and responsiveness using plain CSS without relying on any frameworks."
      ],
      github: "https://github.com/aryann-21/WordQuest",
      preview: null,
    },
  ];


  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 transition-colors">
      {/* Header - Matching Deepak's Layout */}
      <header className="border-b border-zinc-100 dark:border-zinc-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4 sm:gap-0">
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <div className="w-20 h-20 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 flex-shrink-0">
                <Image src="/pfp.jpg" alt="Aryan" width={100} height={100} className="w-full h-full object-cover" />
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-xl sm:text-lg font-bold text-zinc-900 dark:text-white mb-1">Aryan Sharma</h1>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  Software Engineer | Web Developer | Problem Solver
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <a href="https://github.com/aryann-21" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 h-auto text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
                >
                  <Github className="w-4 h-4" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/aryann21/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 h-auto text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
              </a>
              <a href="mailto:aryan21sharmaa@gmail.com">
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 h-auto text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
                >
                  <Mail className="w-4 h-4" />
                </Button>
              </a>
              <a href="https://leetcode.com/u/aryann_21/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 h-auto text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
                >
                  <LeetCodeIcon className="w-4 h-4" />
                </Button>
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-10 sm:space-y-12">
        {/* About */}
        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-white mb-3 sm:mb-4">About Me</h2>
          <div className="text-sm sm:text-base space-y-2 sm:space-y-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">
            <p>
              Hey there! I'm Aryan Sharma, a Computer Science undergrad at NIT Jalandhar with a strong focus on software
              engineering and full-stack web development. I'm passionate about building efficient systems and turning
              cool ideas into real products.
            </p>
            <p>
              Whether it's writing backend APIs, designing clean user interfaces, or solving complex programming
              problems—I'm all in. I love the challenge and creativity that comes with every line of code.
            </p>
            <p>
              When I'm not coding, you'll find me playing basketball ;) also diving into story-driven computer games, or
              exploring something new in tech. Problem-solving is my jam—on and off the court!
            </p>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-white mb-3 sm:mb-4">Education</h2>
          <Card className="border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800">
            <CardHeader className="pb-2 sm:pb-3">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
                <div>
                  <CardTitle className="text-base sm:text-lg dark:text-white">
                    Dr. B.R. Ambedkar National Institute of Technology
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-1 dark:text-zinc-400 text-sm">
                    <MapPin className="w-3 h-3" />
                    Jalandhar, Punjab
                  </CardDescription>
                </div>
                <Badge variant="outline" className="dark:border-zinc-600 dark:text-zinc-300 text-xs">
                  2022 - 2026
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0 ">
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                Bachelor of Technology in Computer Science and Engineering
              </p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">CGPA: 8.53 / 10.0</p>
            </CardContent>
          </Card>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-white mb-3 sm:mb-4">My Work</h2>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <Card key={index} className="border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800">
                <CardHeader className="pb-2 sm:pb-3">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-4">
                    <div className="flex-1 w-full">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 mb-1">
                        <CardTitle className="text-base sm:text-lg dark:text-white">{project.title}</CardTitle>
                        <span className="text-sm text-zinc-600 dark:text-zinc-400">• {project.oneLiner}</span>
                      </div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-500 mb-2">
                        {project.category} • {project.year}
                      </div>
                      {/* Project Technologies */}
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs px-2 py-0.5 bg-zinc-50 dark:bg-zinc-700 border-zinc-300 dark:border-zinc-600 text-zinc-600 dark:text-zinc-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-row flex-wrap gap-2 w-full sm:w-auto justify-start sm:justify-end">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white dark:hover:bg-zinc-700 text-xs"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="w-3 h-3 mr-1" />
                        GitHub
                      </Button>
                      {project.preview && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white dark:hover:bg-zinc-700 text-xs"
                          onClick={() => window.open(project.preview, "_blank")}
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Preview
                        </Button>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                    {project.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1 h-1 bg-zinc-400 dark:bg-zinc-500 rounded-full mt-1.5 flex-shrink-0"></span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-white mb-3 sm:mb-4">My Skills</h2>
          <div className="space-y-3 sm:space-y-4">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-1 sm:mb-2">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 cursor-pointer transition-colors flex items-center gap-1.5 px-2.5 py-1 text-xs"
                    >
                      {skillIcons[skill as keyof typeof skillIcons] && (
                        <span className="filter text-zinc-600 dark:text-zinc-300">
                          {skillIcons[skill as keyof typeof skillIcons]}
                        </span>
                      )}
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-white mb-3 sm:mb-4">Contact Me</h2>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 flex-wrap">
            <a href="https://github.com/aryann-21" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="sm"
                className="bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-700 text-xs w-full sm:w-auto"
              >
                <Github className="w-3 h-3 mr-1.5" />
                GitHub
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/aryann21/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="sm"
                className="bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-700 text-xs w-full sm:w-auto"
              >
                <Linkedin className="w-3 h-3 mr-1.5" />
                LinkedIn
              </Button>
            </a>
            <a href="mailto:aryan21sharmaa@gmail.com">
              <Button
                variant="outline"
                size="sm"
                className="bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-700 text-xs w-full sm:w-auto"
              >
                <Mail className="w-3 h-3 mr-1.5" />
                Email
              </Button>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="sm"
                className="bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-700 text-xs w-full sm:w-auto"
              >
                <FileText className="w-3 h-3 mr-1.5" />
                Resume
              </Button>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-100 dark:border-zinc-800 mt-8 sm:mt-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 text-center">
          <p className="text-xs text-zinc-500 dark:text-zinc-400">hope you liked it ;)</p>
        </div>
      </footer>
    </div>
  )
}
