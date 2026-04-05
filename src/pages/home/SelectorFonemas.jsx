/**
 * Components
 */
import TabSelector from "./Components/TabSelector";

export default function SelectorFonemas() {
  return (
    <>
      <TabSelector
        tabs={[
          { label: "Lista 1" },
          { label: "Lista 2" },
          { label: "Lista 3" },
          { label: "Lista 4" },
        ]}
      />
    </>
  )
}
