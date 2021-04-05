import { CustomizedInput } from '../src/components-react';
import { ComponentType } from 'react'
import Taro from '@tarojs/taro'

declare module '@tarojs/taro' {
  namespace ix {
    function onCashierEventReceive(cb: any): void
    function offCashierEventReceive(): void
    function onMonitorTinyCommand(cb: any): void
    function offMonitorTinyCommand(): void

    function getVersionSync(options: getVersionSync.Options): getVersionSync.Result
    namespace getVersionSync {
      interface Options {
        packageName: string
      }
      interface Result {
        versionCode: string
        versionName: string
      }
    }

    function getSysPropSync(options: getSysPropSync.Options): getSysPropSync.Result
    namespace getSysPropSync {
      interface Options {
        key: string
      }
      interface Result {
        value: string
      }
    }

    function startApp(options: { appName: string }): void

    function onCodeScan(cb: any): void
    function onBackPressed(cb: any): void
    function offBackPressed(): void
    function onDbMessage(cb: any): void
    function offDbMessage(): void
    function onSerialObserver(cb: any): void
    function offSerialPortObserver(): void
    function onDeviceMonitor(cb: any): void
    function offDeviceMonitor(): void
    function onMonitorPrinter(cb: any): void
    function offMonitorPrinter(): void
    function onKeyEventChange(cb: any): void
    function offKeyEventChange(): void
    function onScaleObserver(cb: any): void
    function offScaleObserver(): void
    function onCloudMessage(cb: any): void
    function offCloudMessage(): void


    function startApp(): void
    function faceVerify(): void
    function faceLogin(): void
    function faceLogout(): void
    function writeHID(): void
    function tinyCommand(): void
    function startMonitorTinyCommand(): void
    function getVersion(): void
    function getSysProp(): void
    function codeScan(): void
    function generateImageFromCode(): void
    function startMonitorBackPressed(): void
    function voicePlay(): void
    function speech(): void
    function dbControl(): void
    function storageControl(): void
    function saveImageAutoUse(): void
    function removeSavedImage(): void
    function clearSavedImage(): void
    function configSerialPort(): void
    function writeSerialPort(): void
    function getDevices(): void
    function addDevice(): void
    function removeDevice(): void
    function startDeviceMonitor(): void
    function printer(): void
    function printerStatus(): void
    function queryPrinter(): void
    function startMonitorPrinter(): void
    function readCard(): void
    function configScale(): void
    function writeScaleSerialPort(): void
    function setScaleZero(): void
    function setScaleTare(): void
    function getScaleTare(): void
    function scaleCommand(): void
    function openDrawer(): void
    function closeDrawer(): void
    function messageControl(): void
    function log(): void
    function iReport(): void
  }
}

interface PosterProps {
  posid: string
  audible?: boolean
  onSuccess?: () => void
  onFail?: () => void
  onChange?: () => void
}

interface EditorProps {
  contents: string
  placeholder: string
  'read-only': string
  plugin: string[]
  onInput: Function
  onEditorclick: Function
  onMentionclick: Function
  onGetfileinfo: Function
  onReady: Function
  onInsertimage: Function
  onAtfinder: Function
}

interface CustomizedInputProps {
  items: string
  onItemClick: () => void
}

declare module '@tarojs/components' {
  export const Editor: ComponentType<EditorProps>
  export const CustomizedInput: ComponentType<CustomizedInputProps>
}