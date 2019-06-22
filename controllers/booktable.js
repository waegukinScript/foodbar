/**
 * GET /blog
 * Blog form page.
 */
exports.getBookTable = (req, res) => {
    //const unknownUser = !(req.user);
  
    res.render('booktable', {
      title: 'Book Table',
      //unknownUser,
    });
  };
  