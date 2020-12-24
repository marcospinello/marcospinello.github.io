const buttonIcon = '<rect x="0" y="0" width="24" height="24" fill="currentColor" />',

const today = new Date().toDateString(),

miro.onReady(() => {
  miro.initializeInner({
    extensionPoints: {
      bottomBar: {
        title: "add sticker with today date",
        svgIcon: buttonIcon
        onClick: function () {
          miro.board.widgets.create({type:'sticker', text: 'Today is', x: 0, y: 0})
          miro.board.widgets.update({id: sticker.id, text: today, style:{stickerBackgroundColor:'#7ac673'}})
        },
      },
    },
  });
});
