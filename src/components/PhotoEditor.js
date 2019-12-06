import React from 'react';
import 'tui-image-editor/dist/tui-image-editor.css';
import ImageEditor from '@toast-ui/react-image-editor';
import logo from './../assets/photoshop.svg';
const icona = require("tui-image-editor/dist/svg/icon-a.svg");
const iconb = require("tui-image-editor/dist/svg/icon-b.svg");
const iconc = require("tui-image-editor/dist/svg/icon-c.svg");
const icond = require("tui-image-editor/dist/svg/icon-d.svg");

var customTheme = {
    'common.bi.image': logo,
    'common.bisize.width': '51px',
    'common.bisize.height': '51px',
    'common.backgroundImage': 'none',
    'common.backgroundColor': '#1e1e1e',
    'common.border': '0px',

    // header
    'header.backgroundImage': 'none',
    'header.backgroundColor': 'transparent',
    'header.border': '0px',

    // load button
    'loadButton.backgroundColor': '#fff',
    'loadButton.border': '1px solid #ddd',
    'loadButton.color': '#222',
    'loadButton.fontFamily': '\'Noto Sans\', sans-serif',
    'loadButton.fontSize': '12px',

    // download button
    'downloadButton.backgroundColor': '#fdba3b',
    'downloadButton.border': '1px solid #fdba3b',
    'downloadButton.color': '#fff',
    'downloadButton.fontFamily': '\'Noto Sans\', sans-serif',
    'downloadButton.fontSize': '12px',

    // main icons
    'menu.normalIcon.path': icond,
    'menu.normalIcon.name': 'icon-d',
    'menu.activeIcon.path': iconb,
    'menu.activeIcon.name': 'icon-b',
    'menu.disabledIcon.path': icona,
    'menu.disabledIcon.name': 'icon-a',
    'menu.hoverIcon.path': iconc,
    'menu.hoverIcon.name': 'icon-c',
    'menu.iconSize.width': '24px',
    'menu.iconSize.height': '24px',

    // submenu primary color
    'submenu.backgroundColor': '#1e1e1e',
    'submenu.partition.color': '#3c3c3c',

    // submenu icons
    'submenu.normalIcon.path': icond,
    'submenu.normalIcon.name': 'icon-d',
    'submenu.activeIcon.path': iconc,
    'submenu.activeIcon.name': 'icon-c',
    'submenu.iconSize.width': '32px',
    'submenu.iconSize.height': '32px',

    // submenu labels
    'submenu.normalLabel.color': '#8a8a8a',
    'submenu.normalLabel.fontWeight': 'lighter',
    'submenu.activeLabel.color': '#fff',
    'submenu.activeLabel.fontWeight': 'lighter',

    // checkbox style
    'checkbox.border': '0px',
    'checkbox.backgroundColor': '#fff',

    // range style
    'range.pointer.color': '#fff',
    'range.bar.color': '#666',
    'range.subbar.color': '#d1d1d1',

    'range.disabledPointer.color': '#414141',
    'range.disabledBar.color': '#282828',
    'range.disabledSubbar.color': '#414141',

    'range.value.color': '#fff',
    'range.value.fontWeight': 'lighter',
    'range.value.fontSize': '11px',
    'range.value.border': '1px solid #353535',
    'range.value.backgroundColor': '#151515',
    'range.title.color': '#fff',
    'range.title.fontWeight': 'lighter',

    // colorpicker style
    'colorpicker.button.border': '1px solid #1e1e1e',
    'colorpicker.title.color': '#fff'
};

const PhotoEditor = () => (
    <div>
        <ImageEditor
        includeUI={{
            // loadImage: {
            //     path: 'img/sampleImage.jpg',
            //     name: 'SampleImage'
            // },
            theme: customTheme,
            // menu: ['shape', 'filter'],
            initMenu: 'crop',
            uiSize: {
                width: '100%',
                height: '100vh'
            },
            menuBarPosition: 'bottom'
        }}
        cssMaxHeight={500}
        cssMaxWidth={700}
        selectionStyle={{
            cornerSize: 20,
            rotatingPointOffset: 70
        }}
        usageStatistics={true}
    />
    </div>
    
);

export default PhotoEditor;