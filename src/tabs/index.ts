import {customElement, ElementStyles} from '@microsoft/fast-element';
import {Tabs, TabsTemplate as template} from '@microsoft/fast-foundation';
import {TabsStyles as styles} from './tabs.styles';

/**
 * The VSCode Tabs element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.tabs/ Tabs} and
 * {@link https://www.fast.design/docs/api/fast-foundation.tabstemplate/ TabsTemplate}.
 *
 * @public
 * @remarks
 * HTML Element: `<vscode-tabs>`
 */
@customElement({
	name: 'vscode-tabs',
	template,
	styles,
})
export class VSCodeTabs extends Tabs {}

export * from '../tab/index';
export * from '../tab-panel/index';

/**
 * Styles for the VSCode Tabs component
 * @public
 */
export const TabsStyles: ElementStyles = styles;