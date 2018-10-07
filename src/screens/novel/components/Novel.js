import React, { Component } from 'react'
import { RkButton } from 'react-native-ui-kitten'

import {
  ImageBackground,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'
// import Icon from 'react-native-vector-icons/MaterialIcons'

import { styles } from './styles/Novel.style.js'
import ChapterList from './ChapterList'

class Novel extends Component {
  state = {
    hideFullDescription: true,
    description: '',
    novel: {
      _id: '',
      author: '',
      cover_url: 'https://res.cloudinary.com/dwvrdf3zg/image/upload/v1528075421/39711543-blank-wallpapers_dbfjkh.png',
      name: '',
      translation_team: '',
      description: ''
    },
    textToogle: 'VER MAIS',
    loading: true
  }

  componentDidMount() {
    this.setNovel(this.props.novel)
  }

  setNovel = async (novel) => {
    await this.setState({novel, loading: false})
    this.renderDescription()
  }

  toogleText = async () => {
    await this.setState((prevState) => {
      return { hideFullDescription: !prevState.hideFullDescription }
    })
    this.renderDescription()
  }

  renderDescription = async () => {
    const description = this.state.novel.description

    if (this.state.hideFullDescription) {
      await this.setState({
        description: `${description.slice(0, 100)}...`,
        textToogle: 'VER MAIS'
      })
      return
    }
    await this.setState({
      description,
      textToogle: 'VER MENOS'
    })
  }

  render () {
    const { name, cover_url, translation_team, author } = this.state.novel
    // console.log('this.state', this.state)
    return (
      <ImageBackground
        source={{ uri: cover_url }}
        style={styles.containerImageBackground}
      >
        <View style={styles.backbutton}>
          <View>
            <TouchableOpacity onPress={() => this.props.goBack()}>
              {/* <Icon name="arrow-back" size={30} style={{color: '#A9B2BA'}}/> */}
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={{backgroundColor: 'transparent'}}>
          <View style={styles.imageCardContainer}>

            <View style={styles.imageBox}>
              <Image
                style={styles.image}
                source={{
                  uri: cover_url }}
              />
            </View>
          </View>
          <View style={styles.bodyContainer}>
            <View style={styles.bodyContent}>
              <Text style={styles.title}>
                {name}
              </Text>
            </View>

            {/* <Divider /> */}

            <View style={styles.scanContainer}>
              <View style={styles.labelContainer}>
                {/* <Icon name="account-circle" size={14} /> */}
                <Text
                  style={styles.labelContainerText}
                  numberOfLines={1}>
                  {author}
                </Text>
              </View>
            </View>

            <View style={styles.scanContainer}>
              <View style={styles.labelContainer}>
                {/* <Icon name="translate" size={14} /> */}
                <Text style={styles.labelContainerText}>{translation_team}</Text>
              </View>
            </View>

            <View style={styles.descriptionContainer}>
              <Text>
                {this.state.description}
              </Text>
              <View style={styles.buttonWrapper}>
                <RkButton
                  onPress={this.toogleText}
                  style={styles.button}
                  rkType='icon'
                >
                  {/* <Icon name="visibility" size={18} color='white' /> */}
                  {this.state.textToogle}
                </RkButton>
              </View>
            </View>

            {/* <Divider /> */}

            <View style={{ flex: 1 }}>
              <ChapterList
                chapters={this.props.chaptersTitles}
                navigateToChapter={this.props.navigateToChapter}
              />
              <ActivityIndicator size="large" color="#0000ff" animating={this.state.loading}/>
            </View>

          </View>
        </ScrollView>
      </ImageBackground>
    )
  }
}

export default Novel
