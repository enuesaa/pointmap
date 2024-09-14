<script lang="ts">
	import { type Shape } from '$lib/shape'

	export let shape: Shape
</script>

<rect x={shape.x} y={shape.y} width={shape.width} height={shape.height} fill={shape.fill} />
