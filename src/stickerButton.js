const blackButton = '<rect x="0" y="0" width="24" height="24" fill="currentColor" />'

miro.onReady(() => {
  miro.initializeInner({
    extensionPoints: {
      bottomBar: {
        title: "add a sticker with today\'s date",
        svgIcon: blackButton,
        onClick: () => {
          const waitOneSec = () => new Promise(r => setTimeout(r, 2000))
          let todaysDate = new Date().toDateString()
          let sticker = (await miro.board.widgets.create({type: 'sticker', text: 'Today is'}))[0]
          await waitOneSec()
          await miro.board.widgets.update({id: sticker.id, text: todaysDate, style:{stickerBackgroundColor:'#7ac673'}})
        },
      },
    },
  });
});
