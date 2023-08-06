//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  let headW = 83; // link to head width
  let headH = 99; // link to head height
  let snoutY = headY - 8; // link to snout location Y
  let snoutW = headW - 48; // link to snout width
  let snoutH = headH - 41; // link to snout height

  // Calculate original nostril positions
  let leftNostrilX = headX - snoutW / 3;
  let rightNostrilX = headX + snoutW / 3;
  let nostrilY = snoutY + snoutH / 6;

  // Calculate nostril size based on snout dimensions
  let nostrilW = snoutW / 4;
  let nostrilH = snoutH / 8;

  let eyeY = headY - 15;

  // Draw ears
  fill(128, 100, 100);
  ellipse(headX - 25, headY - 35, headW / 4, headW / 3.2); // Left ear
  ellipse(headX + 25, headY - 35, headW / 4, headW / 3.2); // Right ear

  // Draw capybara head
  fill(160, 120, 90); // Light brown
  stroke(20); // Dark brown
  ellipse(headX, headY, headW, headH);

  // Draw eyes
  fill(0); // Black eyes
  stroke(40);
  ellipse(headX - 34, eyeY, headW / 8.3, headH / 8.25); // Left eye
  ellipse(headX + 34, eyeY, headW / 8.3, headH / 8.25); // Right eye

  // Draw eyelids
  fill(120, 100, 75); // Light brown eyelids
  stroke(30);
  arc(headX - 34, headY - 18, headW / 8, headH / 12, PI, 0); // Left eyelid
  arc(headX + 34, headY - 18, headW / 8, headH / 12, PI, 0); // Right eyelid

  // Draw snout
  stroke(30);
  fill(128, 100, 90);
  var cornerRadius = 16;
  rect(headX - snoutW / 2, snoutY, snoutW, snoutH, cornerRadius);

  // Draw nostrils
  fill(0); // Black nostrils
  stroke(30);

  // Left nostril
  ellipse(leftNostrilX, nostrilY, nostrilW, nostrilH);

  // Right nostril
  ellipse(rightNostrilX, nostrilY, nostrilW, nostrilH);

  // Draw mouth detail
  fill(10);
  stroke(20);
  rect(headX, headY + 32, 0.5, 10);
  triangle(headX, headY + 33, headX + 3, headY + 28, headX - 3, headY + 28);

  // Draw mouth
  fill(10);
  stroke(20);
  arc(headX, snoutY + 49, snoutW / 1.3, snoutH / 3.6, 0.2, PI - 0.2); // Curved mouth

  // Draw whiskers
  stroke(20);
  line(headX - 25, headY + 15, headX - 45, headY + 15);
  line(headX - 25, headY + 20, headX - 45, headY + 25);
  line(headX - 25, headY + 25, headX - 45, headY + 35);
  line(headX + 25, headY + 15, headX + 45, headY + 15);
  line(headX + 25, headY + 20, headX + 45, headY + 25);
  line(headX + 25, headY + 25, headX + 45, headY + 35);
}
