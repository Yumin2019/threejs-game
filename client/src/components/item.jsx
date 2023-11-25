import { useGLTF } from "@react-three/drei";
import { useAtom } from "jotai";
import { mapAtom } from "./SocketManager";
import { useMemo } from "react";
import { SkeletonUtils } from "three-stdlib";

export const Item = ({ item }) => {
  const { name, gridPosition, size, rotation } = item;
  const [map] = useAtom(mapAtom);
  const { scene } = useGLTF(`models/items/${name}.glb`);
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);

  return (
    <primitive
      object={clone}
      position={[
        // gridPosition으로 나눠서 blender상의 좌표를 실제 world 좌표로 변경한다
        size[0] / map.gridDivision / 2 + gridPosition[0] / map.gridDivision,
        0,
        size[1] / map.gridDivision / 2 + gridPosition[1] / map.gridDivision,
      ]}
      rotation-y={((rotation || 0) * Math.PI) / 2}
    />
  );
};
