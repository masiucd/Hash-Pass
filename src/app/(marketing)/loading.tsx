import {Flex, Skeleton} from "@radix-ui/themes";

import {PageWrapper} from "../_components/page-wrapper";

export default function Loading() {
  return (
    <PageWrapper>
      <div className="grid lg:grid-cols-2">
        <Flex direction="column" gap="5" flexGrow="1" justify="center">
          {classNames.map((className) => (
            <Skeleton key={className} className={className} />
          ))}
        </Flex>
        <Flex direction="column" gap="5" flexGrow="1">
          {classNames.map((className) => (
            <Skeleton key={className} className={className} />
          ))}
        </Flex>
      </div>
    </PageWrapper>
  );
}

let classNames = [
  "h-10 w-1/3 rounded-md bg-gray-300 shadow",
  "h-6 w-1/2 rounded-md bg-gray-300 shadow",
  "h-10 w-1/3 rounded-md bg-gray-300 shadow",
  "h-6 w-1/2 rounded-md bg-gray-300 shadow",
  "h-6 w-1/2 rounded-md bg-gray-300 shadow",
  "h-10 w-1/3 rounded-md bg-gray-300 shadow",
  "h-6 w-1/2 rounded-md bg-gray-300 shadow",
  "h-10 w-1/3 rounded-md bg-gray-300 shadow",
  "h-6 w-1/2 rounded-md bg-gray-300 shadow",
  "h-6 w-1/2 rounded-md bg-gray-300 shadow",
  "h-10 w-1/3 rounded-md bg-gray-300 shadow",
];
