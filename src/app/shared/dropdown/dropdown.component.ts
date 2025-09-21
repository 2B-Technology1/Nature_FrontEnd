import { Component, Input } from '@angular/core';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { MenuItem } from 'primeng/api';
import { TieredMenu } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-dropdown',
  imports: [TieredMenu, ButtonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  items: MenuItem[] | undefined;
  @Input({ required: true })
  title!: string;

  ngOnInit() {
    this.items = [
      {
        label: 'File',
        items: [
          {
            label: 'New',
            icon: 'pi pi-plus',
            items: [
              {
                label: 'Document',
                icon: 'pi pi-file'
              },
              {
                label: 'Image',
                icon: 'pi pi-image'
              },
              {
                label: 'Video',
                icon: 'pi pi-video'
              }
            ]
          },
          {
            label: 'Open',
            icon: 'pi pi-folder-open'
          },
          {
            label: 'Print',
            icon: 'pi pi-print'
          }
        ]
      },
      {
        label: 'Edit',
        items: [
          {
            label: 'Copy',
            icon: 'pi pi-copy'
          },
          {
            label: 'Delete',
            icon: 'pi pi-times'
          }
        ]
      },
      {
        label: 'Share',
        items: [
          {
            label: 'Slack',
            icon: 'pi pi-slack'
          },
          {
            label: 'Whatsapp',
            icon: 'pi pi-whatsapp'
          }
        ]
      }
    ]
  }

}
