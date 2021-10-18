import React from 'react';
import IconExclamation from 'library/assets/icons/icon-exclamation';
import './CardTotal.modules.scss';

interface Props {
  price: string;
  text: string;
  prefix?: string;
}

const CardTotal: React.FC<Props> = ({ price, text, prefix }) => {
  return (
    <div className="card">
      <p>
        {prefix}
        {price.replaceAll('.', ',')}
      </p>
      <small>
        {text}
        <sup>
          <IconExclamation />
        </sup>
      </small>
    </div>
  );
};

export default CardTotal;
