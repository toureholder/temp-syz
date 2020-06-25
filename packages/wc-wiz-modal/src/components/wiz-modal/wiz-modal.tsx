import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'wiz-modal',
  styleUrl: 'wiz-modal.css',
  shadow: false,
})
export class WizModal implements ComponentInterface {
  public styleContent;
  public bgColor;

  @Prop() titleModal;
  @Prop() idModal;
  @Prop() size;

  stylization() {
    if (this.size === 'lg') {
      this.styleContent = {
        'background-color': this.bgColor,
      }
    }
  }

  render() {
    console.log('a feature');
    
    return (
      <div style={this.styleContent} class="wiz-modal" id={this.idModal} aria-hidden="true">
        <div class="wiz-modal-dialog  ">
          <div class={`${this.size} dialog`}>
            {
              this.size !== 'lg'
                ? <a onClick={() => history.back()} class="btn-close" aria-hidden="true">×</a>
                : <span></span>
            }
            <div class="wiz-modal-header">
              <h2>{this.titleModal}</h2>
              {
                this.size == 'lg'
                  ? <a onClick={() => history.back()} class="lg-close" aria-hidden="true">×</a>
                  : <span></span>
              }
            </div>
            <div class="wiz-modal-body">
              <slot name="modal-body"></slot>
            </div>
            <hr/>
            <div class="wiz-modal-footer">
              <slot name="modal-footer"></slot>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
