import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import {VueComponent} from '../vue-ts-component'

import Config from '../Config'
import {A} from './A'

interface Link {
  title: string
  href: string
  value: string
  targetBlank: boolean;
}
interface NavigationPopoverProps {
  links: Link[]
}

@Component
class NavigationPopover extends VueComponent<NavigationPopoverProps> {
  @Prop()
  links: Link[]

  visible: boolean

  private getPopover(): HTMLElement {
    return this.$refs.popover as HTMLElement
  }
  private getLink(): HTMLElement {
    return this.$refs.link as HTMLElement
  }

  handleClickOutside(e: any) {
    if (this.getLink().contains(e.target)) {
      return;
    }

    this.hide()
  }

  showPopover(e: Event) {
    e.preventDefault()
    if (!this.visible) {
      this.show()
    } else {
      this.hide()
    }
  }

  show() {
    this.visible = true
    this.getPopover().style.display = 'block'
    window.addEventListener('click', this.handleClickOutside.bind(this))
  }

  hide() {
    this.visible = false
    this.getPopover().style.display = 'none'
    window.removeEventListener('click', this.handleClickOutside)
  }
  
  render() {

    return (
      <div>
        <a class="navigation-link" ref='link' href="javascript:void(0)" data-popover="" onClick={this.showPopover.bind(this)}>{this.$slots.default}</a>
        <div class="popover" ref='popover'>
          <ul class="popover-list">
            {this.links.map((link: Link) => {
              return (
                <li class="popover-item">
                  <A
                    className="popover-link"
                    href={link.href}
                    title={link.title}
                    targetBlank={link.targetBlank}>{link.value}</A>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

@Component
export class Navigation extends Vue {
  render() {
    return (
      <nav class="navigation">
        <section class="container">
          <A
            className="navigation-title"
            href="https://sketchboard.io"
            targetBlank={true}>
            <img src={`${Config.rootPathName()}/static/logo_sketchboard.png`} class='img' />
            <div class="title"><span class='red'>sketch</span>board</div>
          </A>
          <ul class="navigation-list float-right">
            <li class="navigation-item">
              <NavigationPopover
                links={[
                  {
                    // href: `${Config.rootPathName()}/#get-started`,
                    href: `/#get-started`,
                    title: "To Examples",
                    value: 'To Examples',
                    targetBlank: false
                  },
                  {
                    // href: `${Config.rootPathName()}/input-update`,
                    href: `/input-update`,
                    title: "Input Field Updates Component State",
                    value: 'Input Field Updates Component State',
                    targetBlank: false
                  },
                  {
                    // href: `${Config.rootPathName()}/load-component-dynamically`,
                    href: `/load-component-dynamically`,
                    title: "Load Vue Components Dynamically",
                    value: 'Load Vue Components Dynamically',
                    targetBlank: false
                  },
                  {
                    // href: `${Config.rootPathName()}/type-check-jsx-properties`,
                    href: `/type-check-jsx-properties`,
                    title: "Type Check JSX Component Properties",
                    value: 'Type Check JSX Component Properties',
                    targetBlank: false
                  }
              ]}
              >Examples</NavigationPopover>
            </li>
            <li class="navigation-item">
              <NavigationPopover
                links={[
                  {
                    title: 'On Github',
                    href: "https://github.com/saikitanabe/vue-jsx-typescript-example",
                    value: 'On Github',
                    targetBlank: true
                  },
                  {
                    href: "https://github.com/saikitanabe/vue-jsx-typescript-example/issues/new",
                    title: "Need help?",
                    value: 'Need help?',
                    targetBlank: true
                  },
                  {
                    href: "http://milligram.io",
                    title: "This app uses Milligram CSS framework",
                    value: 'Milligram CSS framework',
                    targetBlank: true
                  }
                ]}>Resources</NavigationPopover>
            </li>
          </ul>
          <A
            href="https://github.com/saikitanabe/vue-jsx-typescript-example"
            title="Vue.js, JSX and TypeScript example on Github"
            targetBlank={true}>
            <svg class="octocat" viewBox="0 0 250 250">
              <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
              <path class="octocat-arm" d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"></path>
              <path class="octocat-body" d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"></path>
            </svg>
          </A>
        </section>
      </nav>
    )
  }
}