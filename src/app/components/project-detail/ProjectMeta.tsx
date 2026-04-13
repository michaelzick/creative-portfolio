import { motion } from "motion/react";
import { Layers, Users, Clock, Target } from "lucide-react";

interface ProjectMetaProps {
  duration: string;
  team: string;
  client: string;
  role: string;
}

export function ProjectMeta({ duration, team, client, role }: ProjectMetaProps) {
  const metaItems = [
    { icon: Clock, label: "Duration", value: duration },
    { icon: Users, label: "Team", value: team },
    { icon: Target, label: "Client", value: client },
    { icon: Layers, label: "Role", value: role },
  ];

  return (
    <section className="py-16 px-6 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metaItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center space-x-2 text-zinc-400 mb-2">
                <item.icon size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">{item.label}</span>
              </div>
              <p className="text-lg font-bold text-zinc-900">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
