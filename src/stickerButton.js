miro.onReady(() => {
  miro.initializeInner({
    extensionPoints: {
      bottomBar: {
        title: "add sticker with today date",
        svgIcon: '<rect x="0" y="0" width="24" height="24" fill="currentColor" />',
        onClick: () => {
          let todaysDate = new Date().toDateString()
          miro.board.widgets.create({type:'sticker', text: 'Today is', x: 0, y: 0})
          miro.board.widgets.update({id: sticker.id, text: todaysDate, style:{stickerBackgroundColor:'#7ac673'}})
        },
      },
    },
  });
});
