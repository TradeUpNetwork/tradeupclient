import * as React from 'react';

export interface IInputProps extends Partial<HTMLInputElement> {
  label?: React.ReactNode;
  multiLine?: boolean;
  name: string;
}

class Input extends React.Component<IInputProps> {
  public static defaultProps: Partial<IInputProps> = {
    multiLine: false
  };

  public render(): React.ReactNode {
    return (
      <div className='signup-form__group'>
        {this.props.label && <label htmlFor={this.props.name}>{this.props.label}</label>}
        {
          this.props.multiLine ? 
            <textarea className='signup-form__input' name={this.props.name} />
          :
            <input className='signup-form__input' type='text' name={this.props.name} />
        }
      </div>
    );
  }
}

export default Input;
