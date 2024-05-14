// A chef recorded a video explaining his favorite recipe. However, the size of the video is too large to upload on the internet. He wants to compress the video so that it has the minimum size possible.

// The chef's video has N frames initially. The value of the ith frame is Ai . Chef can do the following type of operation any number of times:

// Choose an index i (1≤i≤N) such that the value of the ith frame is equal to the value of either of its neighbors and remove the i th frame. Find the minimum number of frames the chef can achieve.

let frames = [1, 2, 2, 3, 4, 4, 4, 5, 6, 6, 7];
console.log(compressVideo(frames));

function compressVideo(frames) {
  let i = 0;
  while (i < frames.length) {
    if (
      (i > 0 && frames[i] === frames[i - 1]) ||
      (i < frames.length - 1 && frames[i] === frames[i + 1])
    ) {
      frames.splice(i, 1);
      i = 0;
    } else {
      i++;
    }
  }
  return frames.length;
}
