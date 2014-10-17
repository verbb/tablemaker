/**
 * @author    Supercool Ltd <josh@supercooldesign.co.uk>
 * @copyright Copyright (c) 2014, Supercool Ltd
 * @see       http://supercooldesign.co.uk
 */

(function($){


/**
 * UserTable Class
 */
Craft.UserTable = Garnish.Base.extend(
{

  id: null,

  $elem: null,

  init: function(id)
  {

    this.id = id;
    this.$elem = $('#'+this.id);

    console.log(this.id);

  }

});


})(jQuery);
