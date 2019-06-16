import React from 'react'
import { AdMobBanner } from 'expo-ads-admob'

function AdBanner({ adUnitID }) {
  return (
    <AdMobBanner
      bannerSize="smartBannerPortrait"
      adUnitID={adUnitID}
      testDeviceID="EMULATOR"
      adSize="smartBannerPortrait"
    />
  )
}

export { AdBanner }
