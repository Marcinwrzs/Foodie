import {Form, Dropdown} from './Sort.styled'
import { useState } from 'react';
import { SlArrowDown } from "react-icons/sl";

export enum SortTypes {
  AZ = 'A-Z',
  ZA = 'Z-A',
  random = 'Random'
}

interface SortItemProps {
  value: string;
  onSort: (sort: string) => void;
}

const Sort = ({ value, onSort}: SortItemProps) => {

  const SortOptions = [
    { name: "A-Z", value: "A-Z" },
    { name: "Z-A", value: "Z-A" },
    { name: "Random", value: "Random" }
  ];

  const [isOpen, setOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setOpen(!isOpen)
  };

  const handleChange = (value: string): void => {
    toggleDropdown()
    onSort(value);
  };
  
  return (
    <Form>
      <h4>Sort recipes by: </h4>

      <Dropdown isOpen={isOpen}>
        <div className='dropdown-header' onClick={toggleDropdown}>
          <p>{value}</p>
          <SlArrowDown/>
        </div>

        <ul>
          {SortOptions.map(({ name, value }) => (
            <li key={value} value={value} onClick={() => handleChange(value)}>
              {name}
            </li>
          ))}
        </ul>
      </Dropdown>
    </Form>
  )
};

export default Sort;