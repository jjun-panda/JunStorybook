import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style/scss/index.scss';
import './style/scss/button.scss';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ category, backgroundColor, size, label, ...props }) => {
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태를 저장하는 상태값

  let mode = '';

  if (category === 'Primary') {
    mode = 'storybook-button--primary';
  } else if (category === 'SolidSecondary') {
    mode = 'storybook-button--SolidSecondary';
  } else if (category === 'Outline') {
    mode = 'storybook-button--Outline';
  } else if (category === 'Secondary') {
    mode = 'storybook-button--Secondary';
  }

  // onClick 프로퍼티를 클릭 이벤트 핸들러에 연결
  const handleButtonClick = (event) => {
    setIsLoading(true); // 로딩 상태를 true로 설정
    // 일정 시간 후 로딩 상태를 false로 되돌리는 예시
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    if (onClick) {
      onClick(event); // 만약 외부에서 onClick 프로퍼티를 지정했다면, 해당 클릭 이벤트 핸들러 호출
    }
  };

  return (
    <>
      <button
        type="button"
        className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
        style={backgroundColor && { backgroundColor }}
        {...props}
      >
        {label}
      </button>
      <br/>
      <br/>
      <button
        type="button"
        className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
        style={backgroundColor && { backgroundColor }}
        disabled
        {...props}
      >
        {label}
      </button>
      <br/>
      <br/>
      <button
        type="button"
        className={['storybook-button', `storybook-button--${size}`, mode, `${mode}--loading`].join(' ')}
        style={backgroundColor && { backgroundColor }}
        // disabled={isLoading}
        onClick={handleButtonClick} // 수정된 클릭 이벤트 핸들러를 전달
        {...props}
      >
        {/* {isLoading ? '로딩 중...' : label} */}
      </button>
    </>
  );
};

Button.propTypes = {
  /**
   * Button category
   */
  category: PropTypes.oneOf(['Primary', 'SolidSecondary', 'Outline', 'Secondary']),
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['Small', 'Medium', 'Large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  category: 'Primary',
  size: 'Medium',
  onClick: undefined,
};