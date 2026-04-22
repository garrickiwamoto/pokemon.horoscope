export function removeWhiteBackground(canvas) {
  const ctx = canvas.getContext('2d')
  const { width, height } = canvas
  const imageData = ctx.getImageData(0, 0, width, height)
  const data = imageData.data
  const visited = new Uint8Array(width * height)

  function isWhitish(i) {
    return data[i] > 200 && data[i + 1] > 200 && data[i + 2] > 200 && data[i + 3] > 10
  }

  const queue = []
  const seeds = [
    [0, 0], [width - 1, 0], [0, height - 1], [width - 1, height - 1],
  ]
  for (const [x, y] of seeds) {
    const idx = y * width + x
    if (!visited[idx] && isWhitish(idx * 4)) {
      queue.push(idx)
      visited[idx] = 1
    }
  }

  while (queue.length) {
    const idx = queue.pop()
    data[idx * 4 + 3] = 0
    const x = idx % width
    const y = Math.floor(idx / width)
    for (const [dx, dy] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
      const nx = x + dx, ny = y + dy
      if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue
      const ni = ny * width + nx
      if (!visited[ni] && isWhitish(ni * 4)) {
        visited[ni] = 1
        queue.push(ni)
      }
    }
  }

  ctx.putImageData(imageData, 0, 0)
}
