'use client';
import { Slash } from 'lucide-react';

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { usePathname } from 'next/navigation';

export function BreadCrumbsCustom() {
	const path = usePathname();
	const crumbs = path.split('/');
	return (
		<Breadcrumb>
			<BreadcrumbList>
				{crumbs.map((c: string, index: number) => (
					<BreadcrumbItem key={index}>
						<BreadcrumbLink href={`/${c}`}>
							{c}
						</BreadcrumbLink>

						{index != crumbs.length - 1 && (
							<span>/</span>
						)}
					</BreadcrumbItem>
				))}
			</BreadcrumbList>
		</Breadcrumb>
	);
}
