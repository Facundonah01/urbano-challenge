import { Icon, Users } from 'react-feather';

type CardProps = {
  text: string;
  value: number;
  Icon?: Icon;
};

export default function Card({ text, value, Icon }: CardProps) {
  return (
    <div className="card shadow text-white bg-brand-primary flex-1 flex justify-center items-center">
      <div className="flex flex-row items-center gap-10 py-6">
        {Icon && (
          <div className="h-full flex items-center">
            <Icon size={40} color="white" />
          </div>
        )}
        <div>
          <h1 className="font-semibold sm:text-4xl">{value}</h1>
          <p className="text-center sm:text-sm font-normal">{text}</p>
        </div>
      </div>
    </div>
  );
}
