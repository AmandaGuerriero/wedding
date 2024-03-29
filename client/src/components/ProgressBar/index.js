import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components'

const Container = styled.div`
  progress[value] {
    width: ${props => props.width};
    appearance: none;

    ::-webkit-progress-bar {
      height: 30px;
      background-color: #D0A5CD;
    }

    ::-webkit-progress-value {
      height: 30px;
      border-radius: 0px;
      background-color: ${props => props.color};
    }

  }
`;

const ProgressBar = (props) => {
  const {value, max, color, width} = props;
  return (
      <div>
        <Container color={color} width={width}>
          <progress value={value} max={max}/>
        </Container>
      </div>
  )
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.string,
  label: PropTypes.number
};

// Sets the Default prop values
ProgressBar.defaultProps = {
  color: '#E9CB6D',
  width: '100%'
};


export default ProgressBar;