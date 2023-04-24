import helper from '@/lib/helper';
interface RankingElementsProps {
  elementType: string;
  position: string;
  elements: {
    [key: string]: number;
  };
}

export default function RankingElements({
  elementType,
  position,
  elements,
}: RankingElementsProps) {
  let elementsArray = Object.entries(elements);
  elementsArray.sort((a, b) => b[1] - a[1]);
  // console.log(elementsArray);
  return (
    <div
      className={`w-full xl:mr-8 xl:w-1/2 ${
        position === 'left' ? 'xl:mr-8' : 'xl:ml-8'
      }`}
    >
      <h2 className="mb-10 text-2xl font-medium">
        Top {helper.capitalizeString(elementType)}
      </h2>
      {elementsArray.slice(1, 4).map(([name, quantity]) => {
        const percentage =
          Math.round(((quantity * 100) / elements.totalElements) * 10) / 10;
        console.log(percentage);

        return (
          <div className="mb-7" key={name}>
            <div className="mb-4 flex">
              <label className="text-sm font-medium">
                {helper.capitalizeString(name)}
              </label>
              <label className="ml-auto mr-0 text-lg font-medium">
                {percentage} %
              </label>
            </div>
            <div className="h-[6px] w-full overflow-hidden rounded bg-[#E0E0E0]">
              <div
                style={{ width: `${percentage}%` }}
                className={`h-full  bg-primary-accent`}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
